import React from "react";

const mockProducts = [
  { name: "ASOS Ridley High Waist", price: 79.49, qty: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.5, qty: 37, amount: 4754.5 },
  { name: "Half Sleeve Shirt", price: 39.99, qty: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, qty: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, qty: 64, amount: 1965.81 },
];

const TopSellingProducts: React.FC = () => {
  return (
    <div className="rounded-2xl bg-[#F7F9FB] p-6">
      <h3 className="text-sm mb-1">Top Selling Products</h3>
      <table className="w-full text-xs">
        <thead className="border-b border-[#1c1c1c33] text-[#1c1c1c66]!">
          <tr>
            <th className="text-left py-2 px-3 font-normal!">Name</th>
            <th className="text-left py-2 px-3 font-normal!">Price</th>
            <th className="text-left py-2 px-3 font-normal!">Quantity</th>
            <th className="text-left py-2 px-3 font-normal!">Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((p, idx) => (
            <tr key={idx} className="border-none">
              <td className="py-2 px-3">{p.name}</td>
              <td className="py-2 px-3">${p.price.toFixed(2)}</td>
              <td className="py-2 px-3">{p.qty}</td>
              <td className="py-2 px-3">${p.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;
