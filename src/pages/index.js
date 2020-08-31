import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import { getUserId } from "../redux/actions"
import axios from 'axios';

// export const getServerSideProps = async () => {
//   const response = await axios.get("https://my-json-server.typicode.com/wahyupriadi/db-member/users");
//   return {
//       props: {
//           data: response?.data,
//       },
//   };
// };

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, ...etc }) => {
      const response = await axios.get("https://my-json-server.typicode.com/wahyupriadi/db-member/users");
      store.dispatch({
        type: 'GET_USER_LIST',
        payload: response?.data
      })
    }
);

const Home = ({ data, ...props }) => {
  return (
    <div>
      <h2 className="text-xl text-center py-4">Data Pengguna</h2>
      <table className="table table-auto border-collapse border border-black mx-auto">
        <tr className="bg-gray-200 border-black">
          <th>id</th>
          <th>Nama</th>
          <th>Telepon</th>
          <th>Aksi</th>
        </tr>
          {/* {data.map(item => {
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
          })} */}
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userId: state.users.id
});

const mapDispatchToProps = {
  getUserId: getUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);