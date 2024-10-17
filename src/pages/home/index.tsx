import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IItem, LocalStorageKeys, THeadField } from "../../lib/interface";
import * as storageService from './../../lib/services/storage.service';

import './../../styles/home.scss';
import CreateItem from "./components/CreateItemForm";


const HomePage = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [tHeads, setTHeads] = useState<THeadField[]>([
    { field: 'name', name: 'Name', sort: null },
    { field: 'createdAt', name: 'Created At', sort: null },
  ]);
  const location = useLocation();

  const navItems = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
  ]

  useEffect(() => {
    initialize();
  }, [])

  const initialize = () => {
    const data = storageService.getData(LocalStorageKeys.DATA);
    if (data) setItems(data);
  }

  const handleSaveItem = (itemAdded: IItem) => {
    const data = [...items, itemAdded];
    setItems(data);
    storageService.saveData(LocalStorageKeys.DATA, data);
  }

  const sortByField = (index: number) => {
    const _items = [...items];
    const _tHeads = tHeads.map((th, idx) => {
      if (idx === index) th.sort = th.sort === 'ASC' ? 'DESC' : 'ASC';
      else th.sort = null;

      return th;
    });
    _items.sort((item1, item2) => {
      let comp: number = 0;
      switch (_tHeads[index].field) {
        case 'name':
          comp = item1.name.localeCompare(item2.name);
          break;
        case 'createdAt':
          comp = new Date(item1.createdAt).getTime() - new Date(item2.createdAt).getTime();
          break;
      }

      return _tHeads[index].sort === 'DESC' ? -comp : comp;
    })
    setTHeads(_tHeads);
    setItems(_items);
  }

  return (
    <div className="page home">
      <nav className="container">
        {
          navItems.map(navItem => (
            <a key={navItem.name} href={navItem.href} className={`nav-item ${location.pathname === navItem.href ? 'active' : ''}`}>{navItem.name}</a>
          ))
        }
      </nav>
      <div className="container wrap-content">
        <div className="panel wrap-form">
          <h1 className="panel-title">Create new item</h1>
          <div className="panel-body">
            <CreateItem data={items} handleSaveItem={handleSaveItem} />
          </div>
        </div>
        <div className="panel wrap-table">
          <h1 className="panel-title">Total ({items.length})</h1>
          <div className="panel-body">
            <table>
              <thead>
                <tr>
                  {
                    tHeads.map((th, index) => (
                      <th key={th.name} className="text-center" style={{ width: '50%' }}>
                        <div className="sort-field" onClick={() => sortByField(index)}>
                          <span>{th.name}</span>
                          {
                            th.sort === 'DESC' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a803" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="m3 16 4 4 4-4" /><path d="M7 4v16" /><path d="M15 4h5l-5 6h5" /><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" /><path d="M20 18h-5" /></svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={th.sort ? '#00a803' : '#333'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="m3 8 4-4 4 4" /><path d="M7 4v16" /><path d="M20 8h-5" /><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" /><path d="M15 14h5l-5 6h5" /></svg>
                            )
                          }
                        </div>
                      </th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  items.length > 0 ? (items.map(item => (
                    <tr key={`rows_${item.name}`}>
                      <td className="text-center">
                        <span>{item.name}</span>
                      </td>
                      <td className="text-center">
                        <span>{format(item.createdAt, 'HH:mm, dd MMM yyyy')}</span>
                      </td>
                    </tr>
                  ))) : (
                    <tr>
                      <td colSpan={2}>
                        <div className="no-content">No data!</div>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;