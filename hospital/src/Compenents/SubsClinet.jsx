import React from "react";

function SubsClinet() {
  return (
    <div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                Doctors
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                40,000
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                Patients
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                111K
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                New users annually
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default SubsClinet;
