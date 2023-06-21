'use client';

interface ContainerProps {
  children: React.ReactNode
};

const Container:React.FC<ContainerProps> = ({
    children
})=> {
    return(
        <section className="w-full  bg-inherit ">
            {children}
        </section>
    )
}


export default Container;