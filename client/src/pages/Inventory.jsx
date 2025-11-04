import React from "react";

const Inventory = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div>
      <h1>Inventory</h1>

      <div className="divider divider-horizontal divider-primary"></div>

      <div className="m-2 p-3">
        <button className="btn btn-primary" onClick={() => setOpenModal(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus-icon lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          <span>New</span>
        </button>

        {openModal && (
          <dialog open id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setOpenModal(false)}
                >
                  ✕
                </button>
                <h3 className="font-bold text-lg my-3 text-center">
                  Add new item
                </h3>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Item Name</legend>
                  <input
                    type="text"
                    className="input input-primary"
                    placeholder="e.g., book, laptop, etc."
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Browsers</legend>
                  <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                  </select>
                  <span className="label">Optional</span>
                </fieldset>
              </form>
            </div>
          </dialog>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-base-300">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-base-300">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
