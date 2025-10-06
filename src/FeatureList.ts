import FeaturesIMG from '../public/assets/featureImg.svg'
import FeaturesIMG2 from '../public/assets/featureImg2.svg'
import FeaturesIMG3 from '../public/assets/featureImg3.svg'
import FeaturesIMG4 from '../public/assets/featureImg4.svg'
import FeaturesIMG5 from '../public/assets/featureImg5.svg'

type FeatureList = {
    id: number;
    title: string;
    desc: string;
    img: string
}

type FeatureListProps = FeatureList[];

const FeatureLists: FeatureListProps = [
    {
        id: 1,
        img: FeaturesIMG,
        title: "Instant Transfers",
        desc: "Send and receive money in seconds no delays, no stress."
    },
    {
        id: 2,
        img: FeaturesIMG2,
        title: "Monthly Report",
        desc: "Track spending with smart insights and visuals."
    },
    {
        id: 3,
        img: FeaturesIMG3,
        title: "Quick Bill Payments",
        desc: "Pay utilities, TV, and airtime in one tap."
    },
    {
        id: 4,
        img: FeaturesIMG4,
        title: "Smart Savings",
        desc: "Grow your money with flexible savings options."
    },
    {
        id: 5,
        img: FeaturesIMG5,
        title: "Top-Grade Security",
        desc: "Your transactions are fully encrypted."
    },
    {
        id: 6,
        img: FeaturesIMG,
        title: "24/7 Support",
        desc: "Get help anytime, anywhere."
    },
    {
        id: 7,
        img: FeaturesIMG2,
        title: "Rent Calculator",
        desc: "Plan rent smartly, save the right amount on time."
    },
    {
        id: 8,
        img: FeaturesIMG3,
        title: "Social Billing",
        desc: "Split bills and request payments with ease."
    }


];

export default FeatureLists;