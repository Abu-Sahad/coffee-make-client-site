const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, test, category, details, photo } = coffee
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
                        <button className="btn">Edit</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CoffeeCard;