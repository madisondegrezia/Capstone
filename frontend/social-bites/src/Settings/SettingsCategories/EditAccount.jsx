import { Form } from "react-router-dom"
import "./EditAccountStyle.css"

export default function EditAccount () {
    return (
        <div className="entire-edit-page">
            <h1 className="edit-title">Edit Account Information</h1>
            <Form className="edit-info-form">
                
                <div>
                    <label htmlFor="email">Email </label>
                    <input name="email" id="email" type="email" 
                    />
                </div>
                <div>
                    <label htmlFor="name">Name </label>
                    <input name="name" id="name" type="name"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input name="password" id="password" type="password"
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </Form>
        </div>
    )
}