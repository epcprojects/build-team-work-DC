import React from 'react'
import CyberInput, { InputType } from './CyberInput'
import Image from 'next/image'
import { Images } from '../../ui/images'

const PaymentInformationForm = () => {
  return (
    <div className="grid grid-cols-12 mb-8 px-4 md:px-0">
          <div className="col-span-12">
            <h4 className="text-lg font-semibold mb-0.5 text-sapphireBlue">
              Payment Information
            </h4>
            <span className="d-block text-sm mb-2">
              Please enter your creditcard information including your name and
              billing address that appears on your statement.
            </span>
            <div className="rounded-xl border mt-3 p-4">
              <div className="text-sm grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md text-carbonGray bg-pattensBlue">
                        Credit Card Number
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2  md:gap-4 col-span-12 md:col-span-5">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Name on Credit Card
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Expiry Date
                      </label>
                    </div>
                    <div className="col-span-12 flex items-center gap-2 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Card Security Code
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <div className="md:w-1/2 md:pr-1">
                        <CyberInput
                          id=" firstName"
                          name=" firstName"
                          className="h-8"
                          type={InputType.TEXT}
                          //   placeholder="Your  first name"
                          // value={formData.username}x
                          error={false}
                          errorMessage="Please enter a valid email address."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-5 flex flex-col items-center gap-4 justify-center">
                      <Image
                        src={Images.paymentImages.secure}
                        className="w-24"
                        alt=""
                      />
                      <span className="text-blue-600 text-sm">
                        Online Payment Solution
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 flex flex-col gap-3 md:gap-4">
                  <div className="grid grid-cols-12 gap-2 md:gap-4 ">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Country
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Address1
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Address2
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        City
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        State/Province
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        ZipCode
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Telephone
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-12 md:col-span-5">
                      <label className="w-full text-xs md:text-sm px-2 font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                        Receipt Email
                      </label>
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <CyberInput
                        id=" firstName"
                        name=" firstName"
                        className="h-8"
                        type={InputType.TEXT}
                        //   placeholder="Your  first name"
                        // value={formData.username}x
                        error={false}
                        errorMessage="Please enter a valid email address."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PaymentInformationForm
