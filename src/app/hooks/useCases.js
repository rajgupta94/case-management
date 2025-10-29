'use client';
import { useCaseContext } from '../context/CaseContext';

export const useCases = () => {
  return useCaseContext();
};