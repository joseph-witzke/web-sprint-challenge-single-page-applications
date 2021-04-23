import React from 'react';

export default function OrderForm() {
    return (
        <form id='pizza-form'>
            <div className='first-input'>
                <label>Name
                    <input id='name-input'
                      type="text"
                      value=""
                      onChange=""
                      name="name"
                      placeholder="Enter name here..."
                    />
                </label>
            </div>

            <div className="dropdown">
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

            <div className="checkboxes">
                <label>
                    Cheese
                    <input
                      type="checkbox"
                      name="cheese"
                      checked=""
                      onChange=""
                    />
                </label>
                <label>
                    Pepperoni
                    <input
                      type="checkbox"
                      name="pepperoni"
                      checked=""
                      onChange=""
                    />
                </label>
                <label>
                    Mushroom
                    <input
                      type="checkbox"
                      name="mushroom"
                      checked=""
                      onChange=""
                    />
                </label>
                <label>
                    Ham
                    <input
                      type="checkbox"
                      name="hame"
                      checked=""
                      onChange=""
                    />
                </label>
            </div>

            <div className="second-input">
                <label>Special Instructions
                    <input id='special-text'
                      type="text"
                      value=""
                      onChange=""
                      name="special"
                      placeholder="Anything else?"
                    />
                </label>
            </div>

            <div>
                <button id="order-button"disabled="">Add to Order</button>
            </div>
        </form>
    )
}