import React from "react";
import './Filter.css'
function Filter()
{
    return(    
    <div className="btn-group">
        <button type="button"className="btn light">Все сотрудники</button>
        <button type="button"
        className="btn light">На повышение</button>
        <button type="button"
        className="btn light">З/П больше 1000$</button>
    </div>
    )

}

export default Filter