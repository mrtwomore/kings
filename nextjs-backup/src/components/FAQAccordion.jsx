'use client';

import { useState, useEffect } from 'react';

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each question
    const handleQuestionClick = (event) => {
      const faqItem = event.currentTarget.parentNode;
      const index = Array.from(document.querySelectorAll('.faq-item')).indexOf(faqItem);
      setActiveIndex(prevIndex => prevIndex === index ? -1 : index);
    };
    
    // Add event listeners to all FAQ questions
    faqQuestions.forEach(question => {
      question.addEventListener('click', handleQuestionClick);
    });
    
    // Cleanup event listeners
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', handleQuestionClick);
      });
    };
  }, []); // Remove activeIndex from dependency array to prevent infinite loop

  useEffect(() => {
    // Initialize the first FAQ item as open and handle state changes
    const faqItems = document.querySelectorAll('.faq-item');
    const faqAnswers = document.querySelectorAll('.faq-answer');
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    if (faqAnswers.length === 0) return; // Safety check if elements don't exist yet

    faqAnswers.forEach((answer, index) => {
      if (index === activeIndex) {
        answer.style.display = 'block';
        if (toggleIcons[index]) toggleIcons[index].textContent = '-';
        faqItems[index].classList.add('active');
      } else {
        answer.style.display = 'none';
        if (toggleIcons[index]) toggleIcons[index].textContent = '+';
        faqItems[index].classList.remove('active');
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    // Handle category button clicks
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    const handleCategoryClick = (event) => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-light', 'text-dark', 'hover:bg-primary', 'hover:text-white');
      });
      
      // Add active class to clicked button
      event.currentTarget.classList.remove('bg-light', 'text-dark', 'hover:bg-primary', 'hover:text-white');
      event.currentTarget.classList.add('bg-primary', 'text-white');
      
      // Reset active FAQ item when changing categories
      setActiveIndex(0);
      
      // Here you would filter FAQ items based on category
      // For demonstration purposes, we're just changing the button styles
    };
    
    categoryButtons.forEach(button => {
      button.addEventListener('click', handleCategoryClick);
    });
    
    return () => {
      categoryButtons.forEach(button => {
        button.removeEventListener('click', handleCategoryClick);
      });
    };
  }, []);

  // This component doesn't render anything visible,
  // it just adds behavior to existing DOM elements
  return null;
} 