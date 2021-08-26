import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardNew, startUploading ,clearCard, Edit} from '../../actions/CardAction';
import { useForm } from '../../hooks/useForm'

const AddTaks = () => {
  const dispatch = useDispatch()
  let file = "";
  const { active } = useSelector(state => state.card)
  const [formValue, handleInputChange, reset] = useForm(active)
  
  const activeId = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active)
    }
    activeId.current = active.id
  }, [active])

  const { title, responsible, description, priority } = formValue

  const handleFileChange = (e) => {
    file = e.target.files[0];
    console.log(file)
    if (file) {
      dispatch(startUploading(file))
    }
  }

  const handlNewCard = (e) => {
    e.preventDefault();

    if (active.title == "") {
      dispatch(CardNew(formValue))
      reset()
    } else if(active.id !== ""){
      dispatch(Edit(formValue))
    }
    dispatch(clearCard())
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

  return (
    <div className="card container text-center">
      <h2>Agregar nueva tarea</h2>
      <form className="card-body " onSubmit={handlNewCard}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control mt-1"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="responsible"
            className="form-control mt-1"
            placeholder="Responsible"
            value={responsible}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="description"
            className="form-control mt-1"
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <select
            name="priority"
            className="form-control mt-1"
            value={priority}
            onChange={handleInputChange}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

        <input
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div>
          <input
            type="button"
            className="btn border-bottom shadow-sm"
            value="Picture"
            onClick={handlePictureClick}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  )
}

export default AddTaks
