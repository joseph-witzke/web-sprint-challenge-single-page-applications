import React from 'react';

export default function OrderForm() {
    return (
        <form id='pizza-form'>
            <div className='form-inputs'>
                <label>Name
                    <input id='name-input'
                      type="text"
                      value=""
                      onChange=""
                      name="name"
                      placeholder="Enter name here..."
                    />
                </label>

                <label>Size
                    <select id='size-dropdown'
                      value=""
                      name="size"
                      onChange="">
                        <option value="">--Select Size--</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
            </div>
        </form>
    )
}