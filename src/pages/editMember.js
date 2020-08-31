import React from 'react'
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import axios from 'axios'

// export const getServerSideProps = async () => {
//     const response = await axios.get(`https://my-json-server.typicode.com/wahyupriadi/db-member/users`);
//     return {
//         props: {
//             data: response?.data,
//         },
//     };
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//      ({ store, req, res, ...etc }) => {
        
//     }
// );

const editMember = ({ users }) => {
    return (
        <div>
            <h2 className="text-xl text-center py-4">Edit Data Pengguna ID</h2>
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

export default connect(state => state)(editMember)