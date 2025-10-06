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
        img: "/public/featureImg.png",
        title: "Instant Transfers",
        desc: "Send and receive money in seconds no delays, no stress."
    },
    {
        id: 2,
        img: "/public/featureImg2.png",
        title: "Monthly Report",
        desc: "Track spending with smart insights and visuals."
    },
    {
        id: 3,
        img: "/public/featureImg3.png",
        title: "Quick Bill Payments",
        desc: "Pay utilities, TV, and airtime in one tap."
    },
    {
        id: 4,
        img: "/public/featureImg4.png",
        title: "Smart Savings",
        desc: "Grow your money with flexible savings options."
    },
    {
        id: 5,
        img: "/public/featureImg5.png",
        title: "Top-Grade Security",
        desc: "Your transactions are fully encrypted."
    },
    {
        id: 6,
        img: "/public/featureImg.png",
        title: "24/7 Support",
        desc: "Get help anytime, anywhere."
    },
    {
        id: 7,
        img: "/public/featureImg2.png",
        title: "Rent Calculator",
        desc: "Plan rent smartly, save the right amount on time."
    },
    {
        id: 8,
        img: "/public/featureImg3.png",
        title: "Social Billing",
        desc: "Split bills and request payments with ease."
    }


];

export default FeatureLists;