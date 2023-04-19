'use client';

interface ContainerProps {
  children: React.ReactNode
};

const Container:React.FC<ContainerProps> = ({
    children
})=> {
    return(
        <div className="w-full flex bg-inherit">
            {children}
        </div>
    )
}


export default Container;