import React from 'react'

const editMember = () => {
    return (
        <div>
            <h2 className="text-xl text-center py-4">Edit Data Pengguna</h2>
            <form className="edit-container">
                <div className="input-control">
                    <label className="input-label">Nama</label>
                    <input className="input-field" type="text" name="name" />
                </div>
                <div className="input-control">
                    <label className="input-label">Telepon</label>
                    <input className="input-field" type="text" name="phone" />
                </div>
                <div className="input-action">
                    <button className="action-button red">Batal</button>
                    <button className="action-button green">Simpan</button>
                </div>
            </form>
        </div>
    )
}

export default editMember