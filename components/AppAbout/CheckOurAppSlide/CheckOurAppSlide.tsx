import imageData from 'assets/images/iPhoneX.png';
import Slider from "react-slick";
import Image from 'next/image';
import nextIcon from 'assets/icons/nextIcon.svg';
import prevIcon from 'assets/icons/prevIcon.svg';

interface DataSlide {
    key: string;
    image: string;
}
export const CheckOurAppSlide = () => {
    const data: DataSlide[] = [
        {
            key: '1',
            image: imageData.src
        },
        {
            key: '2',
            image: imageData.src
        },
        {
            key: '3',
            image: imageData.src
        },
        {
            key: '3',
            image: imageData.src
        },
    ]

    const SampleNextArrow=(props:any)=> {
        const { className, style, onClick } = props;
        return (
            <div className={className}  onClick={onClick}>
                <Image  src={nextIcon.src} alt="Prev" height={84} width={84} />
        </div>
        );
      }
      
      const SamplePrevArrow =(props:any)=> {
        const { className, style, onClick } = props;
        return (
            <div className={className}  onClick={onClick}>
                <Image src={prevIcon.src} alt="Prev" height={84} width={84} />
            </div>
        );
      }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 2000,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (<Slider {...settings}>
        {
            data.map((item: DataSlide) => {
                return <div key={item.key} style={{ backgroundColor: "red", }}><img style={{ width: "100%" }} src={item.image} alt='' /></div>
            })
        }
    </Slider>);
}