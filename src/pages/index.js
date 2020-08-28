import { useState, useEffect } from 'react'
import Head from 'next/head';
import axios from 'axios';

export const getServerSideProps = async () => {
  const response = await axios.get("https://my-json-server.typicode.com/wahyupriadi/db-member/users");
  return {
      props: {
          data: response?.data,
      },
  };
};

const Home = ({ data }) => {

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
          {data.map(item => {
            return (
              <tr key={item.id} className="border border-black">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.phone}</td>
                <td className="p-2 text-xs">
                  <button className="px-2 py-1 bg-gray-300 mr-2">Edit</button>
                  <button className="px-2 py-1 bg-red-400 text-white">Delete</button>
                </td>
              </tr>
            )
          })}
      </table>
    </div>
  )
}

export default Home;