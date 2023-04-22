'use client';

interface ContainerProps {
  children: React.ReactNode
};

const Container:React.FC<ContainerProps> = ({
    children
})=> {
    return(
        <div className="w-full flex bg-inherit flex-row-reverse">
            {children}
        </div>
    )
}


export default Container;