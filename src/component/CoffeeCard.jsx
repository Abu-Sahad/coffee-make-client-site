import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .them(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your coffee has been deleted.',
                                    'success'
                                )
                            }
                        })

                }
            })




    }
    return (

        <div className="card card-side bg-base-100 shadow-xl"
            style={{
                background: '#F5F4F1'
            }}>
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className="pt-5">
                    <h2 className="card-title">Name:{name}</h2>
                    <p className="mt-2">Quantity:{quantity}</p>
                    <p className="mt-2">Supplier:{supplier}</p>
                    <p className="mt-2">Test:{test}</p>
                </div>
                <div className="card-actions justify-end pt-3 pb-3">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active ">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;