import React from "react";

const usersss = [
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Jonathan Hernandez" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Daniela Navarro" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Matias Hernandez" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Jose Hernandez" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Loreto Miranda" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Martina Estefanía" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Martina Estefanía" },
  { userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", userName: "Martina Estefanía" },
];

const UserTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg h-[70%] w-[87%] dark:bg-gray-900 mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
          <tr>
            <th className="w-[15%] p-4">Mostrar</th>
            <th className="w-[75%] px-6 py-3">Nombre</th>
          </tr>
        </thead>
        <tbody className="overflow-x-auto">
          {/* aqui tengo que renderizar los usuarios */}
          {usersss.map((user) => (
            <tr className="bg-white items-left dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-[25%]">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${user.userName}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${user.userName}`}
                    className="sr-only"
                  >
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="row w-[75%]">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://www.adslzone.net/app/uploads-adslzone.net/2022/04/free-avatar-apertura.jpg?x=480&y=375&quality=40"
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{user.userName}</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
