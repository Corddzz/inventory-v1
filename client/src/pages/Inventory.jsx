import React from "react";

const Inventory = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">📦 Inventory</h1>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setOpenModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
          <span>New Item</span>
        </button>
      </div>

      <div className="divider"></div>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra">
          <thead className="bg-base-200 text-base">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Brand / Model</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Date Created</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Dell Desktop</td>
              <td>Hardware</td>
              <td>Dell OptiPlex 7090</td>
              <td>5</td>
              <td>IT Office</td>
              <td>2024-01-15</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-xs btn-info">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Dell Desktop</td>
              <td>Hardware</td>
              <td>Dell OptiPlex 7090</td>
              <td>5</td>
              <td>IT Office</td>
              <td>2024-01-14</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-xs btn-info">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Dell Desktop</td>
              <td>Hardware</td>
              <td>Dell OptiPlex 7090</td>
              <td>5</td>
              <td>IT Office</td>
              <td>2024-01-13</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-xs btn-info">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Dell Desktop</td>
              <td>Hardware</td>
              <td>Dell OptiPlex 7090</td>
              <td>5</td>
              <td>IT Office</td>
              <td>2024-01-12</td>
              <td className="flex gap-2 justify-center">
                <button className="btn btn-xs btn-info">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {openModal && (
        <dialog open className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
              🖥️ Add New Inventory Item
            </h2>

            <form className="space-y-6">
              <fieldset className="fieldset border border-base-300 rounded-xl p-6">
                <legend className="fieldset-legend font-semibold text-lg flex items-center gap-2">
                  🧩 Item Information
                </legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Asset ID */}
                  <div className="form-control">
                    <label className="label font-medium">Asset ID</label>
                    <input
                      type="text"
                      placeholder="PC-001"
                      className="input input-bordered input-primary w-full"
                      disabled
                    />
                  </div>

                  {/* Item Name */}
                  <div className="form-control">
                    <label className="label font-medium">Item Name</label>
                    <input
                      type="text"
                      placeholder="Dell Desktop"
                      className="input input-bordered input-primary w-full"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="form-control">
                    <label className="label font-medium">Category</label>
                    <select
                      className="select select-bordered select-primary w-full"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option>Hardware</option>
                      <option>Equipment</option>
                      <option>Consumables</option>
                    </select>
                  </div>

                  {/* Brand / Model */}
                  <div className="form-control">
                    <label className="label font-medium">Brand / Model</label>
                    <input
                      type="text"
                      placeholder="Dell OptiPlex 7090"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>

                  {/* Serial Number */}
                  <div className="form-control">
                    <label className="label font-medium">Serial Number</label>
                    <input
                      type="text"
                      placeholder="Optional"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>

                  {/* Date Created */}
                  <div className="form-control">
                    <label className="label font-medium">Date Created</label>
                    <input
                      type="date"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>

                  {/* Location */}
                  <div className="form-control">
                    <label className="label font-medium">Location</label>
                    <input
                      type="text"
                      placeholder="IT Office / Lab 1"
                      className="input input-bordered input-primary w-full"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="form-control">
                    <label className="label font-medium">Quantity</label>
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="input input-bordered input-primary w-full"
                      placeholder="Quantity"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="fieldset border border-base-300 rounded-xl p-6">
                <legend className="fieldset-legend font-semibold text-lg flex items-center gap-2">
                  🧾 Additional Details
                </legend>

                <div className="form-control mt-4">
                  <label className="label font-medium">
                    Description / Notes
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    rows="3"
                    placeholder="Write any additional information, specifications, or notes..."
                  ></textarea>
                </div>
              </fieldset>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  💾 Save Item
                </button>
              </div>
            </form>

            {/* Close button */}
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setOpenModal(false)}
              >
                ✕
              </button>
            </form>
          </div>

          {/* Modal Backdrop */}
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setOpenModal(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default Inventory;
