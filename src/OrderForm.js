import React from 'react';

export default function OrderForm({ values, submit, change, disabled, errors }) {

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === "checkbox" ? checked: value;
        change(name, valueToUse)
    }
    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='first-input'>
                <h2>Build your Pizza</h2>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
                <label>Name&nbsp;
                    <input id='name-input'
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      name="name"
                      placeholder="Enter name here..."
                    />
                </label>
            </div>

            <div className="dropdown">
                <h3>Selcet a Size</h3>
                <label>
                    <select id='size-dropdown'
                      value={values.size}
                      name="size"
                      onChange={onChange}>
                        <option value="">--Select Size--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
            </div>

            <div className="checkboxes">
                <h3>Choose your Toppings:</h3>
                <label>
                    Cheese
                    <input
                      type="checkbox"
                      name="cheese"
                      checked={values.cheese}
                      onChange={onChange}
                    />
                </label>
                <label>
                    Pepperoni
                    <input
                      type="checkbox"
                      name="pepperoni"
                      checked={values.pepperoni}
                      onChange={onChange}
                    />
                </label>
                <label>
                    Mushroom
                    <input
                      type="checkbox"
                      name="mushroom"
                      checked={values.mushroom}
                      onChange={onChange}
                    />
                </label>
                <label>
                    Ham
                    <input
                      type="checkbox"
                      name="ham"
                      checked={values.ham}
                      onChange={onChange}
                    />
                </label>
            </div>

            <div className="second-input">
                <h3>Special Instructions</h3>
                <label>
                    <input id='special-text'
                      type="text"
                      value={values.special}
                      onChange={onChange}
                      name="special"
                      placeholder="Anything else?"
                    />
                </label>
            </div>

            <div>
                <h3>Place your Order!</h3>
                <button id="order-button"disabled={disabled}>Add to Order</button>
            </div>
        </form>
    )
}