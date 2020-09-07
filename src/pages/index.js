import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import { getUserId } from "../redux/actions"
import { GET_USER_LIST } from "../redux/actionTypes"
import axios from 'axios';

const Home = ({ users, ...props }) => {
  return (
    <div>
      <h2 className="text-xl text-center py-4">Data Pengguna</h2>
      <table className="table table-auto border-collapse border border-black mx-auto">
        <thead>
          <tr className="bg-gray-200 border-black">
            <th>id</th>
            <th>Nama</th>
            <th>Telepon</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.list.map(item => {
            return (
              <tr key={item.id} className="border border-black">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.phone}</td>
                <td className="p-2 text-xs">
                  <Link href="/editMember">
                    <button className="px-2 py-1 bg-gray-200 mr-2" onClick={() => props.getUserId(item.id)}>Edit</button>
                  </Link>
                  <button className="px-2 py-1 bg-red-400 text-white">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, req, res, ...etc }) => {
//     console.log('2. Page.getServerSideProps uses the store to dispatch things');
//     const response = await axios.get("https://my-json-server.typicode.com/wahyupriadi/db-member/users");
//     store.dispatch({
//       type: GET_USER_LIST,
//       payload: response?.data
//     })
//   }
// );

Home.getInitialProps = async ({ store, req, res, ...etc }) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  const response = await axios.get("https://my-json-server.typicode.com/wahyupriadi/db-member/users");
  store.dispatch({
    type: GET_USER_LIST,
    payload: response?.data
  })
}


const mapDispatchToProps = {
  getUserId: getUserId
};

export default connect(state => state, mapDispatchToProps)(Home);