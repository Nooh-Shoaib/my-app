import React from 'react';
import { Link } from 'react-router-dom';
import { TabTitle } from "./utils/GeneralFunction";
export default function NoPage() {
  const siteTitle = 'PAGE NOT FOUND';

  const customMessage = 'Page might have been removed or temporarily unavailable ';

  TabTitle(siteTitle);

  return (
    <body className='bg-amber-50 w-full h-screen'>
      <div className='h-52  py-52 mx-24 w-96 '>
        <h1 className='text-3xl flex justify-center py-5 text-black '>402 PAGE NOT FOUND</h1>
        <p className='container px-5 text-xs py-4'><em>The Requested URL/your-402-page-stinks was not found on this server<hr /> {customMessage}</em></p>

        <div className="button button-2"><Link to="/" className='flex justify-center'>Go to Home</Link></div>


        <div>
          {/* const DynamicRouteComponent = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [additionalState, setAdditionalState] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchedRef = useRef(false);

  const fetchData = async (repo, imageStateSetter, indexStateSetter) => {
    if (fetchedRef.current) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Nooh-Shoaib${repo}/products/${slug}`);
      const data = await response.json();

      console.log('Response:', response);
      console.log('Data:', data);

      setAdditionalState(data?.addition);
      imageStateSetter(data?.productImages[0]);
      indexStateSetter(0);
      setProduct(data);
      setLoading(false);

      fetchedRef.current = true; // Set the ref to true after the first fetch
    } catch (error) {
      console.error('Error fetching data:', error);
      setProduct([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('/products', setCurrentImage, setCurrentImageIndex);
  }, [slug]);

  const [otherImage, setOtherImage] = useState(null);
  const [otherImageIndex, setOtherImageIndex] = useState(0);

  useEffect(() => {
    fetchData('/otherproducts', setOtherImage, setOtherImageIndex);
  }, [slug]);

  const [thirdImage, setThirdImage] = useState(null);
  const [thirdImageIndex, setThirdImageIndex] = useState(0);

  useEffect(() => {
    fetchData('/thirdproducts', setThirdImage, setThirdImageIndex);
  }, [slug]);

  const [fourthImage, setFourthImage] = useState(null);
  const [fourthImageIndex, setFourthImageIndex] = useState(0);

  useEffect(() => {
    fetchData('/fourthproducts', setFourthImage, setFourthImageIndex);
  }, [slug]);

  return (
    // Your JSX rendering logic here
  );
};

        */}
        </div>

      </div>
    </body>
  );
}



{/* const DynamicRouteComponent = () => {
const { slug } = useParams();
const [loading, setLoading] = useState(true);
const [product, setProduct] = useState([]);
const [additionalState, setAdditionalState] = useState(null);
const [currentImage, setCurrentImage] = useState(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const fetchedRef = useRef(false);

const fetchData = async (repo, imageStateSetter, indexStateSetter) => {
if (fetchedRef.current) {
return;
}

setLoading(true);
try {
const response = await fetch(`https://my-json-server.typicode.com/Nooh-Shoaib${repo}/products/${slug}`);
const data = await response.json();

console.log('Response:', response);
console.log('Data:', data);

setAdditionalState(data?.addition);
imageStateSetter(data?.productImages[0]);
indexStateSetter(0);
setProduct(data);
setLoading(false);

fetchedRef.current = true; // Set the ref to true after the first fetch
} catch (error) {
console.error('Error fetching data:', error);
setProduct([]);
setLoading(false);
}
};

useEffect(() => {
fetchData('/products', setCurrentImage, setCurrentImageIndex);
}, [slug]);

const [otherImage, setOtherImage] = useState(null);
const [otherImageIndex, setOtherImageIndex] = useState(0);

useEffect(() => {
fetchData('/otherproducts', setOtherImage, setOtherImageIndex);
}, [slug]);

const [thirdImage, setThirdImage] = useState(null);
const [thirdImageIndex, setThirdImageIndex] = useState(0);

useEffect(() => {
fetchData('/thirdproducts', setThirdImage, setThirdImageIndex);
}, [slug]);

const [fourthImage, setFourthImage] = useState(null);
const [fourthImageIndex, setFourthImageIndex] = useState(0);

useEffect(() => {
fetchData('/fourthproducts', setFourthImage, setFourthImageIndex);
}, [slug]);

return (
// Your JSX rendering logic here
);
};

*/}