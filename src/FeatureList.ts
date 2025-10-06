type FeatureList = {
    id: number;
    img: string;
    title: string;
    desc: string;
}

type FeatureListProps = FeatureList[];

const FeatureLists: FeatureListProps = [
    {
        id: 1,
        img: "/public/assets/featureImg.svg",
        title: "Instant Transfers",
        desc: "Send and receive money in seconds no delays, no stress."
    },
    {
        id: 2,
        img: "/public/assets/featureImg2.svg",
        title: "Monthly Report",
        desc: "Track spending with smart insights and visuals."
    },
    {
        id: 3,
        img: "/public/assets/featureImg3.svg",
        title: "Quick Bill Payments",
        desc: "Pay utilities, TV, and airtime in one tap."
    },
    {
        id: 4,
        img: "/public/assets/featureImg4.svg",
        title: "Smart Savings",
        desc: "Grow your money with flexible savings options."
    },
    {
        id: 5,
        img: "/public/assets/featureImg5.svg",
        title: "Top-Grade Security",
        desc: "Your transactions are fully encrypted."
    },
    {
        id: 6,
        img: "/public/assets/featureImg.svg",
        title: "24/7 Support",
        desc: "Get help anytime, anywhere."
    },
    {
        id: 7,
        img: "/public/assets/featureImg2.svg",
        title: "Rent Calculator",
        desc: "Plan rent smartly, save the right amount on time."
    },
    {
        id: 8,
        img: "/public/assets/featureImg3.svg",
        title: "Social Billing",
        desc: "Split bills and request payments with ease."
    }


];

export default FeatureLists;