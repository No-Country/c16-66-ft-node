// eslint-disable-next-line react/prop-types
export function BoxIcon ({icon, text, openClose}) {
    return(
    <div className={`flex hover:bg-white p-2 rounded-xl mx-auto ${openClose ? 'w-full justify-start gap-4' : 'w-2/3 h-auto justify-center'}`}>
		<img src={icon} className="max-w-none"/>
		<p style={{display: openClose ? 'block': 'none'}} className='text-sm'>{text}</p>
	</div>)
}