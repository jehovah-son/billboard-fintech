import BillBoard from "../../public/Billboard.png";

export default function Footer() {
    return (
        <div>
            <div className="container mx-auto flex  justify-between py-8">
                <div className="">
                    <a href="/" className="border block w-fit">
                        <img
                            src={BillBoard}
                            alt="BillBoard"
                            className="w-36 md:w-44"
                            width={200}
                            height={200}
                        />
                    </a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat sunt a laboriosam architecto at voluptatem
                        quod eveniet, quibusdam adipisci accusamus est aut
                        molestiae cupiditate vel possimus magni eaque assumenda
                        dolores.
                    </p>
                </div>
                <div className="">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Placeat sunt a laboriosam architecto at voluptatem
                        quod eveniet, quibusdam adipisci accusamus est aut
                        molestiae cupiditate vel possimus magni eaque assumenda
                        dolores.
                    </p>
                </div>
            </div>
        </div>
    );
}
