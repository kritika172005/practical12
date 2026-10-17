import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

function CurrentOrders() {
  return <h2 className="text-xl font-bold text-green-600">Current Orders</h2>;
}

function OrderHistory() {
  return <h2 className="text-xl font-bold text-blue-600">Order History</h2>;
}

function CancelledOrders() {
  return <h2 className="text-xl font-bold text-red-600">Cancelled Orders</h2>;
}

function Orders() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-purple-700">
          E-commerce Order Management
        </h1>

        <h2 className="mb-4 text-xl font-semibold">Orders Page</h2>

        <nav className="mb-6 flex flex-wrap gap-4">
          <Link
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            to="current"
          >
            Current Orders
          </Link>

          <Link
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            to="history"
          >
            Order History
          </Link>

          <Link
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            to="cancelled"
          >
            Cancelled Orders
          </Link>
        </nav>

        <div className="rounded-lg border border-gray-200 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<Orders />}>
          <Route path="current" element={<CurrentOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;