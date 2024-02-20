import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import Modal from '#components/UI/Modal.tsx';
import Button from '#components/UI/Button.tsx';
import Twemoji from '#components/UI/Twemoji.tsx';
import { AppDispatch, RootState } from '#store/index.ts';
import { modalUIActions } from '#store/modal-ui-slice.ts';
import { TDetailDiscountInfo } from '#types/Discount.ts';
import { EModalUIType } from '#types/UI.ts';
import { getAgoTime } from '#utils/formatting.ts';

type DiscountDetailProps = unknown;

const DiscountDetail: React.FC<DiscountDetailProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalType = useSelector((state: RootState) => state.modalUI.type);
  const detailDiscountInfo: TDetailDiscountInfo = useSelector(
    (state: any) => state.modalUI.detailInfo,
  );

  if (!detailDiscountInfo) {
    return null;
  }

  let titleContent = 'Not on discount yet... 🙄';
  let descriptionContent = '';
  let subDescriptionContent = '';

  const startedAt = DateTime.fromISO(
    detailDiscountInfo.startedAt,
  ).toLocaleString(DateTime.DATETIME_SHORT);

  if (detailDiscountInfo.discountStatus) {
    titleContent = `On discount now! 🥳`;
    const startedAt = detailDiscountInfo.startedAt || DateTime.now().toISO();
    const formattedDateTime = DateTime.fromISO(startedAt).toLocaleString(
      DateTime.DATETIME_SHORT,
    );

    subDescriptionContent = `${formattedDateTime} ~ now`;
    descriptionContent = `Last checked ${getAgoTime(detailDiscountInfo.updatedAt)}`;
  } else {
    const dateDiffStr = getAgoTime(detailDiscountInfo.endedAt);

    const endedAt = DateTime.fromISO(detailDiscountInfo.endedAt).toLocaleString(
      DateTime.DATETIME_SHORT,
    );

    descriptionContent = `Last discount was ${dateDiffStr}`;
    subDescriptionContent = `${startedAt} ~ ${endedAt}`;
  }

  const handleModalClose = () => {
    dispatch(modalUIActions.closeModal({ type: EModalUIType.NONE }));
  };

  return (
    <Modal
      open={modalType === EModalUIType.DISCOUNT_DETAIL}
      onClose={handleModalClose}
    >
      <div className="modal-box max-w-lg max-md:max-w-sm bg-base outline outline-1 outline-base-content/10 md:p-10">
        <div className="rounded-lg w-full">
          <div className="flex justify-between items-center border-b border-base-content/10">
            <h2 className="text-xl md:text-3xl font-bold line-clamp-1 mb-3 md:mb-6">
              <Twemoji
                emoji={titleContent}
                emojiClassName="md:size-8 md:align-[-2px] size-5 align-[-1px]"
              />
            </h2>
            <form method="dialog">
              <button className="btn md:btn-md btn-sm btn-circle btn-ghost text-xl absolute right-4 top-4">
                ✕
              </button>
            </form>
          </div>
        </div>
        <div className="border-b border-base-content/10">
          <div className="flex items-center justify-between p-2 max-md:p-1 m-2">
            <div className="flex-auto items-center flex-row">
              <div className="">
                <p className="font-semibold text-md md:text-2xl">
                  {descriptionContent}
                </p>
                <p className="text-[0.7em] md:text-lg text-gray-500">
                  {subDescriptionContent}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-row"></div>
          </div>
        </div>
        <div className="modal-action mt-3 md:mt-5">
          <form method="dialog" className="w-full">
            <Button className="btn btn-primary w-full btn-md md:btn-lg md:text-xl text-md md:h-[3.25rem] md:min-h-[3.25rem] h-[2.5rem] min-h-[2.5rem] mb-0.5 md:mb-1 rounded-lg">
              <a
                href={'https://www.udemy.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Udemy
              </a>
            </Button>
            <p className="text-[0.7em] md:text-[1.05em] text-gray-500 text-center">
              Udemy regions would be based on your location.
            </p>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop backdrop-blur-sm">
        <button />
      </form>
    </Modal>
  );
};

export default DiscountDetail;
