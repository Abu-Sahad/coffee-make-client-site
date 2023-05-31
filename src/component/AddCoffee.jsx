const AddCoffee = () => {

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const test = form.test.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffeeAll = { name, quantity, supplier, test, category, details, photo }
        console.log(coffeeAll)


        fetch('http://127.0.0.1:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffeeAll)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    
                }
                console.log(data);
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24 rounded-md shadow-md mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-4 text-center">Add New Coffee</h1>
            <p className="text-center mb-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdate}>
                <div className="md:grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter name" />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Available Quantity </label>
                        <input type="number" id="quantity" name="quantity" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter quantity available" />
                    </div>
                </div>

                <div className="md:grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="supplier" className="block text-gray-700 text-sm font-bold mb-2">Supplier</label>
                        <input type="text" id="supplier" name="supplier" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter supplier" />
                    </div>

                    <div>
                        <label htmlFor="test" className="block text-gray-700 text-sm font-bold mb-2">Test</label>
                        <input type="text" id="test" name="test" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter test" />
                    </div>
                </div>

                <div className="md:grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="category-details" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                        <input type="text" id="category-details" name="category" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter category details" />
                    </div>
                    <div>
                        <label htmlFor="chef" className="block text-gray-700 text-sm font-bold mb-2">Details</label>
                        <input type="text" id="chef" name="details" className="form-input w-full  h-10 rounded  ps-4" placeholder="Enter chef" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                        <input type="text" id="photo" name="photo" className="form-input w-full h-10 rounded  ps-4" placeholder="Enter photo URL" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-full">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;
