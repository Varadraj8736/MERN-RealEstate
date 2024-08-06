import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { FaSpinner } from 'react-icons/fa';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        if (!res.ok) throw new Error('Failed to fetch offer listings');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        if (!res.ok) throw new Error('Failed to fetch rent listings');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        if (!res.ok) throw new Error('Failed to fetch sale listings');
        const data = await res.json();
        setSaleListings(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOfferListings();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto text-center">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your <span className="text-slate-500">perfect</span> <br />
          space without the hassle
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Find your ideal living space with Primeprop. <br />
          Explore a wide variety of properties waiting for you.
        </div>
        <Link
          to={'/search'}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started...
        </Link>
      </div>

      {/* Swiper Section */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className="h-[500px]"
                aria-label={`Offer listing: ${listing.title}`}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listing Results Section */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Recent Offers</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Recent Places for Rent</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className="my-3 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-600">Recent Places for Sale</h2>
              <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
