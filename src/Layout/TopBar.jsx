import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffer, updateTime } from "../app/store";
function TopBar() {
  const dispatch = useDispatch();
  const { timeLeft, offerName } = useSelector((state) => state.countdown);

  useEffect(() => {
    dispatch(fetchOffer());

    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className="bg-green-600 text-white text-xs md:text-sm w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 h-10 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 whitespace-nowrap">
          <span className="font-medium">{offerName} Ends in:</span>

          {timeLeft ? (
            <>
              <span className="font-semibold">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span>Days</span>

              <span className="font-semibold">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span>Hours</span>

              <span className="font-semibold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span>Minutes</span>

              <span className="font-semibold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span>Sec.</span>
            </>
          ) : (
            <span>Loading...</span>
          )}
        </div>

        <div className="md:hidden text-center w-full">
          Sale ends soon <br />
          <>
            {timeLeft ? (
              <>
                <span className="font-semibold">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span> Days </span>

                <span className="font-semibold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span> Hours </span>

                <span className="font-semibold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span> Minutes </span>

                <span className="font-semibold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span> Sec.</span>
              </>
            ) : (
              <span className="font-semibold text-red-400">Sale Ended</span>
            )}
          </>
        </div>

        <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
          <span>
            Buy one get one free on{" "}
            <span className="text-yellow-300 font-medium">first order</span>
          </span>

          <span className="opacity-40">|</span>

          <span className="hover:underline cursor-pointer">Track Order</span>

          <span className="hover:underline cursor-pointer">About Us</span>

          <span>Eng</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
