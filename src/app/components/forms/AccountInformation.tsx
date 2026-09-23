
import CyberInput, { InputType } from './CyberInput'
import { AccountInfoIcon } from '@/public/icons'

const AccountInformation = () => {
  return (
     <div className="rounded-xl overflow-hidden bg-white">
                <div className="flex gap-2 border-b items-center  py-3 bg-astronautBlue px-4">
                  <AccountInfoIcon />
                  <h5 className="text-base font-medium mb-0 text-white">
                    Account Information
                  </h5>
                </div>

                <div className="p-4  md:p-6 md:pb-0 pb-0">
                  <div className="border-b border-platinum pb-4">
                    <div className="mb-3">
                      <CyberInput
                        id="username"
                        name="username"
                        label="Username"
                        error={false}
                        placeholder="test1"
                        height="40px"
                        // value="test"
                        className="bg-whiteSmoke border-0"
                        type={InputType.TEXT}
                      />
                    </div>
                    <div className="mb-3">
                      <CyberInput
                        id="password"
                        name="password"
                        label="Password"
                        // value="12345566"
                        placeholder="**********"
                        error={false}
                        height="40px"
                        className="bg-whiteSmoke border-0"
                        type={InputType.PASSWORD}
                      />
                    </div>
                    <div className=" ">
                      <CyberInput
                        id="adminpin"
                        name="adminpin"
                        label="AdminPin"
                        // value="12345566"
                        placeholder="**********"
                        error={false}
                        height="40px"
                        className="bg-whiteSmoke border-0"
                        type={InputType.PASSWORD}
                      />
                    </div>
                  </div>
                  <div className=" pb-3 pt-3 rich_text">
                    <a className="text-decoration-none text-base font-semibold hover:underline underline-offset-4 hover:text-prussianBlue hover:cursor-pointer text-primary">
                      Reset Information
                    </a>
                  </div>
                </div>
              </div>
  )
}

export default AccountInformation
