import { useMemo, useState, useCallback, useRef } from 'react';
import cx from 'classnames';
import Styled from './index.style';
import ChevLeftSvg from 'assets/images/icons/chevLeft.svg';
import ChevRightSvg from 'assets/images/icons/chevRight.svg';
import useInterval from 'hooks/useInterval';

interface Props {
  data: any[];
  hasDots?: boolean;
  numberPerViewport?: number;
  gap?: number;
  hasNavigator?: boolean;
  animationDuration?: number;
  intervalTime?: number;
  className?: string;
}

const Carousel = ({
  data,
  hasDots = true,
  hasNavigator = true,
  animationDuration = 500,
  numberPerViewport: numberPerViewport,
  gap,
  className,
  intervalTime = 8000,
}: Props) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (activeIndex === data.length - 1) {
      return;
    }
    setActiveIndex(activeIndex + 1);
  }, [activeIndex, data.length]);

  const handlePrev = useCallback(() => {
    if (activeIndex === 0) {
      return;
    }
    setActiveIndex(activeIndex - 1);
  }, [activeIndex]);

  const renderDots = useMemo(() => {
    if (!hasDots) {
      return null;
    }

    const dotsLength = data.length - (numberPerViewport ?? 0) + 1;
    return new Array(dotsLength > -1 ? dotsLength : 0)
      .fill(0)
      .map((_, index) => (
        <Styled.Dot key={index} $isActive={activeIndex === index} onClick={() => setActiveIndex(index)} />
      ));
  }, [activeIndex, data.length, hasDots, numberPerViewport]);

  const renderImages = useMemo(() => {
    return data.map((item, index) => (
      <Styled.CarouselImage
        key={index}
        gap={gap}
        numberPerViewpot={numberPerViewport}
        isActive={activeIndex === index}
        className="carousel-image"
      >
        {item}
      </Styled.CarouselImage>
    ));
  }, [activeIndex, data, gap, numberPerViewport]);

  const renderNavigators = useMemo(() => {
    if (!hasNavigator) {
      return null;
    }
    return (
      <>
        <Styled.Prev
          className="prev-navigator"
          disabled={activeIndex === 0 || data.length <= (numberPerViewport ?? 0)}
          onClick={handlePrev}
        >
          <ChevLeftSvg height={24} />
        </Styled.Prev>
        <Styled.Next
          className="next-navigator"
          disabled={activeIndex === data.length - 1 || data.length <= (numberPerViewport ?? 0)}
          onClick={handleNext}
        >
          <ChevRightSvg height={24} />
        </Styled.Next>
      </>
    );
  }, [activeIndex, data.length, handleNext, handlePrev, hasNavigator, numberPerViewport]);

  useInterval(() => {
    if (intervalTime) {
      let newActiveIndex = activeIndex + 1;
      if (newActiveIndex >= data.length) {
        newActiveIndex = 0;
      }
      setActiveIndex(newActiveIndex);
    }
  }, intervalTime);

  return (
    <Styled.Container ref={containerRef} className={cx(className)}>
      <Styled.Wrap className="images-group">
        <Styled.Box
          dataLength={data.length}
          activeIndex={activeIndex}
          numberPerViewpot={numberPerViewport}
          animationDuration={animationDuration}
          containerWidth={containerRef?.current?.offsetWidth}
        >
          {renderImages}
        </Styled.Box>
        {hasDots && <Styled.DotsGroup className="dots-group">{renderDots}</Styled.DotsGroup>}
        {renderNavigators}
      </Styled.Wrap>
    </Styled.Container>
  );
};

export default Carousel;
