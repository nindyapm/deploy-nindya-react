import {React, useState} from "react"
import Button from "../Button/Button";
import { useEffect } from "react";
//import { deleteProduct, editProduct } from "../../redux/products/productsSlice";
import axios from "axios";

const Products = () => {
    //ambil state product dengan useSelector
    const products = useSelector((state) => state.product)
    const dispatch = useDispatch()

    const [isEdit, setEdit] = useState(false)
    const [tempData, setTempData] = useState({})

    const editHandler = (data) => {
        setEdit(true)
        setTempData(data)
    }

    const saveHandler = () => {
        setEdit(false)
        dispatch(editProduct(tempData))
    }

    return (
        <div className="product">
            <div className="judul">List Product</div>
            <div className="listproduct">
                <table className="table table-striped" id="datatabel">
                    <thead>
                        <tr>
                            <th>No</th>    
                            <th>Product Name</th>
                            <th>Product Category</th>
                            <th>Image of Product</th>
                            <th>Product Freshness</th>
                            <th>Additional Description</th>
                            <th>Product Price</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDummy?.map((data) => {
                            return(
                                <tr className={isEdit && "bg-secondary"}>
                                    <td>{data.productId}</td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true}
                                        onInput={(e) => setTempData(prev => ({...prev, productName: e.target.textContent}))}
                                        contentEditable={isEdit}
                                    >
                                        {data.productName}
                                    </td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productCategory: e.target.textContent}))} 
                                        contentEditable={isEdit}
                                    >
                                        {data.productCategory}
                                    </td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, imageOfProduct: e.target.textContent}))} 
                                        contentEditable={isEdit}
                                    >
                                        <img src={data.imageOfProduct} alt="Gambar" />
                                    </td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productFreshness: e.target.textContent}))} 
                                        contentEditable={isEdit}
                                    >
                                        {data.productFreshness}
                                    </td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, additionalDescription: e.target.textContent}))} 
                                        contentEditable={isEdit}
                                    >
                                        {data.additionalDescription}
                                    </td>
                                    <td
                                        className={isEdit && "text-white"} 
                                        suppressContentEditableWarning={true} 
                                        onInput={(e) => setTempData(prev => ({...prev, productPrice: e.target.textContent}))} 
                                        contentEditable={isEdit}
                                    >
                                        {data.productPrice}
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => {
                                                handleDelete(data.productId)
                                            }}
                                            className="btn btn-danger text-black"
                                            label="Delete"
                                        />
                                    </td>
                                    <td>
                                        {isEdit ? 
                                            (
                                                <Button
                                                    onClick={() => saveHandler()}
                                                    className="btn btn-success"
                                                    label="Save"
                                                />
                                            ) :
                                            (
                                                <Button
                                                    onClick={() => editHandler()}
                                                    className="btn btn-warning"
                                                    label="Edit"
                                                />
                                            )

                                        }
                                        
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <input id="search" type="text" placeholder="Search by Product Name" />
            </div>
            <div className="btn-group b" role="group" aria-label="buttondeletion">
                <button type="button" className="btn btn-primary" id="search-button">
                    Search
                </button>
            </div>      
        </div>

    )
}

export default Products