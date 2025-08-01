import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
function Modal() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <form className="bg-[#797979] p-4 w-[100vw] z-100 h-fit  md:w-[45vw] lg:w-[35vw] xl:w-[25vw] fixed bottom-0 right-0 text-white">
          <div className="w-full h-full relative flex flex-col gap-6">
            <h1 className="text-xl font-bold">A COMPLIMENTARY GIFT</h1>
            <p className="text-[1rem]">
              RECEIVE A COMPLIMENTARY PERFUME MINI OF YOUR CHOICE ON ORDERS OVER €80.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 w-full outline-0 border border-black"
            />
            <div className="flex gap-4 flex-col">
              <h1 className="font-semibold">Shipping Location</h1>
              <div className="flex gap-4">
                <ModalSel coun={'NRS'} />
                <ModalSel coun={'USD'} />
                <ModalSel coun={'INR'} />
              </div>
            </div>
            <Button btnName="Sign Up" className="btn-bg p-4 b" />
            <div className="flex items-center gap-4">
              <input type="checkbox" className="text-xl" />
              <span className="text-sm">
                I agree to receive emails about products, offers, and promotions from The Perfume
                Shop.
              </span>
            </div>
            <p
              className="absolute top-0 right-0 text-xl cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </p>
          </div>
        </form>
      )}
    </>
  );
}

function ModalSel({ coun }: { coun: string }) {
  return (
    <label className="flex flex-row gap-2 items-center">
      <input type="checkbox" className="border border-black" />
      <span className="text-sm">{coun}</span>
    </label>
  );
}

export default Modal;
