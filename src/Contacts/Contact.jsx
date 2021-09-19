import React, {useState} from 'react';

const Contact = () => {
    const [userData, setUserData] = useState({
     firstName: "",
     lastName: "",
     phone: "",
     email: "",
     address: "",
     message: "",
    });
    let name, value;
    const postUserData = (event) =>{
       name = event.target.name;
       value = event.target.value;

       setUserData({...userData, [name]:value});
    };
    const submitData = async(e) =>{
      e.preventDefault();
      const { firstName, lastName, phone, email, address, message} =userData;
      if(firstName && lastName && phone && email && address && message){
     const res = await fetch('https://reactform-09-default-rtdb.firebaseio.com/Data.json',{
         method: "POST",
         headers:{
             "Content-Type": "application/json",
         },
         body: JSON.stringify({
            firstName, lastName, phone, email, address, message
         }),
      
    });
    if(res){
        setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
        })
        alert("Data Stored");
    }else{
        alert("plz. fill the form");
    }
    }else{
        alert("plz. fill the form");
}

    };
    return (
        <>
           <section className="contactus-section">
               <div className="container">
                   <div className="row">
                       <div className="col-12 col-lg-10 mx-auto">
                           <div className="row">
                               <div className="contactus-leftside col-12 col-lg-5">
                                   <h1 className="main-heading fw-bold">Contact Us -- </h1>
                                   <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et obcaecati, laboriosam nostrum omnis doloribus non.</p>
                                   <figure>
                                       <img src="https://images.pexels.com/photos/7709177/pexels-photo-7709177.jpeg?crop=entropy&cs=srgb&dl=pexels-mart-production-7709177.jpg&fit=crop&fm=jpg&h=853&w=1280" alt="contact" className="img-fluid" />
                                   </figure>
                               </div>
            {/* right side contact form */}
            <div className="contact-rightside col-12 col-lg-7">
                <form method="POST">
                        <div className="row">
                            <div className="col-12 col-lg-6 contact-input-field">
                                <input type="text" 
                                name="firstName" 
                                id="" 
                                className="form-control"
                                placeholder="First Name" 
                                value={userData.firstName}
                                onChange={postUserData}
                                />
                            </div>
                            <div className="col-12 col-lg-6 contact-input-field">
                                <input type="text" 
                                name="lastName" 
                                id=""
                                className="form-control"
                                placeholder="Last Name" 
                                value={userData.lastName}
                                onChange={postUserData}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6 contact-input-field">
                                <input type="number" 
                                name="phone" 
                                id="" 
                                className="form-control"
                                placeholder="Phone"
                                value={userData.phone}
                                onChange={postUserData}
                                />
                            </div>
                            <div className="col-12 col-lg-6 contact-input-field">
                                <input type="email" 
                                name="email" 
                                id=""
                                className="form-control"
                                placeholder="Email-Id"
                                value={userData.email}
                                onChange={postUserData}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 contact-input-field">
                                <input type="text" 
                                name="address" 
                                id="" 
                                className="form-control "
                                placeholder="Add Address"
                                value={userData.address}
                                onChange={postUserData}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" 
                                name="message" 
                                id="" 
                                className="form-control"
                                placeholder="Enter Your Message"
                                value={userData.message}
                                onChange={postUserData}
                                />
                            </div>
                        </div>
                        <div className="form-check form-checkbox-style">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                            <label className="form-check-label main-hero-para">
                               I agree to the Terms & Conditions For this Payment etc.
                            </label>
                            </div>
                            <button type="submit" className="btn btn-style w-100" onClick={submitData}>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</div>
</section> 
        </>
    )
}

export default Contact;
