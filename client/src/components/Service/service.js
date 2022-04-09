const BASE_URL = process.env.NODE_ENV === 'production'
? 'https://wedding-258.herokuapp.com'
: 'http://localhost:8080';



export const UpdateGuest = async (phone, guest) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...guest }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/${phone}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};