import React from 'react'
import CyberInput, { InputType } from './CyberInput'

const AdministrativeInformationForm = () => {
  return (
    <div className="grid grid-cols-12 mb-8 px-4 md:px-0">
          <div className="col-span-12">
            <h4 className="text-base md:text-lg font-semibold mb-0.5 text-sapphireBlue">
              Administrative Information
            </h4>
            <span className="block text-xs md:text-sm mb-2">
              This will be the contact/email where all certificate copies will
              get emailed to.
            </span>
            <div className="rounded-xl border mt-3 p-4">
              <div className="text-sm grid grid-cols-12 gap-3 md:gap-4">
                <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-5">
                  <div className="col-span-12 md:col-span-5">
                    <label className="w-full px-2 text-xs md:text-sm font-semibold block py-1.5 rounded-md text-carbonGray bg-pattensBlue">
                      First Name
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
                <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-5">
                  <div className="col-span-12 md:col-span-5">
                    <label className="w-full px-2 text-xs md:text-sm font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                      Email
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

                <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-5">
                  <div className="col-span-12 md:col-span-5">
                    <label className="w-full px-2 text-xs md:text-sm font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                      Last Name
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

                <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-5">
                  <div className="col-span-12 md:col-span-5">
                    <label className="w-full px-2 text-xs md:text-sm font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
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

                <div className="grid grid-cols-12 gap-2 md:gap-4 col-span-12 md:col-span-5">
                  <div className="col-span-12 md:col-span-5">
                    <label className="w-full px-2 text-xs md:text-sm font-semibold block py-1.5 rounded-md bg-pattensBlue text-carbonGray">
                      Company
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
  )
}

export default AdministrativeInformationForm
