import React from 'react'

const SalesReceiptTable = () => {
  return (
 <div className="w-full md:px-6 px-4 mb-8">
                <table className="w-full ">
                  <thead>
                    <tr>
                      <th className="p-1.5 md:p-2 bg-iceBerg border border-platinum text-start text-[10px] md:text-sm font-bold">
                        Date
                      </th>
                      <th className="p-1.5 md:p-2 bg-iceBerg border border-platinum text-start text-[10px] md:text-sm font-bold">
                        Product Description
                      </th>
                      <th className="p-1.5 md:p-2 bg-iceBerg border border-platinum md:text- text-start text-[10px] md:text-sm font-bold">
                        Quantity
                      </th>
                      <th className="p-1.5 md:p-2 bg-iceBerg border border-platinum  md:text-center text-start text-[10px] md:text-sm font-bold">
                        Unit Price
                      </th>
                      <th className="p-1.5 md:p-2 bg-iceBerg border border-platinum md:text-center text-start text-[10px] md:text-sm font-bold">
                        Ext Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-normal text-start text-neutral-700">
                          04/28/2025
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-normal text-start text-neutral-700">
                          Cyber Safety Training
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                          1
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700">
                          $29.99
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1.5 md:p-2 ">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2">
                        <h2 className="text-[10px] md:text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                          SubTotal:
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                          $29.99
                        </h2>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-1.5 md:p-2">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 ">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                          Sales Tax:
                        </h2>
                      </td>
                      <td className="p-1.5 md:p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-neutral-700">
                          $0.00
                        </h2>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-2 ">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-2">
                        <h2 className="text-sm font-normal text-end text-neutral-700 hidden ">
                          $29.99
                        </h2>
                      </td>
                      <td className="p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-primary">
                          Total:
                        </h2>
                      </td>
                      <td className="p-2 border border-platinum">
                        <h2 className="text-[10px] md:text-sm font-bold text-end text-primary">
                          $29.99
                        </h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
  )
}

export default SalesReceiptTable
