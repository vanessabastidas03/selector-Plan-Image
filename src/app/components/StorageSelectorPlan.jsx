"use client";

import { useState } from "react";

const plans = [
  {
    id: "100gb",
    name: "100GB Storage",
    description: "Basic file storage",
    price: 19.99,
    current: true,
  },
  {
    id: "1tb",
    name: "1TB Storage",
    description: "Advanced file storage",
    price: 89.99,
    current: false,
  },
  {
    id: "5tb",
    name: "5TB Storage",
    description: "Enterprise-grade storage",
    price: 149.99,
    current: false,
  },
];

export default function StoragePlanSelector() {
  const [selectedPlanId, setSelectedPlanId] = useState("1tb");

  const currentPlan = plans.find((p) => p.current);
  const newPlan = plans.find((p) => p.id === selectedPlanId);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Select Storage Plan</h2>
        <div className="mt-2 flex rounded-md bg-gray-100 w-fit text-sm font-medium">
          <button className="px-4 py-1 rounded-l-md text-gray-500 cursor-default">
            Monthly
          </button>
          <button className="px-4 py-1 bg-white rounded-md shadow text-black">
            Yearly
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {plans.map((plan) => (
          <label
            key={plan.id}
            className={`flex items-start justify-between p-4 rounded-lg border cursor-pointer ${
              selectedPlanId === plan.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-start space-x-3">
              <input
                type="radio"
                name="storagePlan"
                checked={selectedPlanId === plan.id}
                onChange={() => setSelectedPlanId(plan.id)}
                className="mt-1"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{plan.name}</span>
                  {plan.current && (
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-600">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>
            </div>
            <span className="font-semibold">${plan.price.toFixed(2)}/year</span>
          </label>
        ))}
      </div>

      <div className="pt-4 border-t">
        <h3 className="font-medium text-gray-700">Summary</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Current plan</span>
            <span>${currentPlan?.price.toFixed(2)}/year</span>
          </div>
          <div className="flex justify-between">
            <span>New plan</span>
            <span>${newPlan?.price.toFixed(2)}/year</span>
          </div>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t font-semibold">
          <span>Total</span>
          <span>${newPlan?.price.toFixed(2)}/year</span>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Change plan
        </button>
      </div>
    </div>
  );
}
