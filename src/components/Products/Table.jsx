import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const newTable = () => {
    //state yang menyimpan data dari mock api
    const [dataDummy, setDataDummy] = useState([])
    
    //url mock api yang telah dibuat
    const url = "https://642e37472b883abc64092bf7.mockapi.io/products"

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setDataDummy(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //hapus data
    const handleDelete = (productId) => {
        if(window.confirm('Apakah yakin ingin menghapus data?')){
            // dispatch(deleteProduct(id))
            deleteProduct(productId)
            // setFetchProducts(true)
        }
    }

    async function deleteProduct(productId){
        console.log(productId);
        try{
            await axios.delete(`https://642e37472b883abc64092bf7.mockapi.io/products/${productId}`)
            alert("data : " + productId + " berhasil di hapus");
            location.reload(); 
        }catch (error){
            console.log(error);
        }
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
                                <tr key={data.productId}>
                                    <td>{data.productId}</td>
                                    <td>{data.productName}</td>
                                    <td>{data.productCategory}</td>
                                    <td>
                                        <img src={data.imageOfProduct} alt="Gambar" />
                                    </td>
                                    <td>{data.productFreshness}</td>
                                    <td>{data.additionalDescription}</td>
                                    <td>{data.productPrice}</td>
                                    <td>
                                        <Button
                                        onClick={() => handleDelete(data.productId)}
                                        className="btn btn-danger"
                                        label="Delete"
                                        />
                                    </td>
                                    <td>
                                        <Button
                                            className="btn btn-success"
                                            label="Edit"
                                        />
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

export default newTable