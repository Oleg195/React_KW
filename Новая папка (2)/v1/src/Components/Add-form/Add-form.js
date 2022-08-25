import './Add-form.css'
const AddForm=()=>{


return(
    <div className='app-add-form'>
        <h3>Добавить нового сотрудника</h3>
        <form className='add-form d-flex'>
<input type="text" className='form-control new-post-label' placeholder=' как зовут?'/>
<input type="number" className='form-control new-post-label' placeholder='З/П в $'/>
<button type='submit' className='btn btn-outline-light'>Добавить</button>
        </form>
    </div>
)
}
export default AddForm;