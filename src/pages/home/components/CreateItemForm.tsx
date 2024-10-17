import { useState } from "react";
import { IItem } from "../../../lib/interface";

interface CreateItemProps {
  data: IItem[];
  handleSaveItem: (item: IItem) => void
}

const CreateItem = ({ data, handleSaveItem }: CreateItemProps) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    const value = e.target.value;
    setName(value);
  }

  const checkNameExisted = (itemName: string) => data.some(item => item.name === itemName);

  const onSubmit = (name: string) => {
    if (checkNameExisted(name)) {
      setIsError(true);
      return;
    }

    setName('');
    handleSaveItem({ name, createdAt: new Date().toString() });
  }

  return (
    <div className="form-group">
      <label htmlFor="name">Name of item</label>
      <div className={`input-group ${isError ? 'invalid' : ''}`}>
        <input id="name" type="text" className="form-control" onChange={handleChange} value={name} />
        <button className="btn btn-primary btn-submit" onClick={() => onSubmit(name)}>Submit</button>
      </div>
      <span className={`caption ${isError ? 'error-message show' : 'hide'}`}>Name is already existed!</span>
    </div>
  )
}

export default CreateItem;