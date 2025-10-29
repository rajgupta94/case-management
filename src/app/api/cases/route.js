import { NextResponse } from 'next/server';


export async function GET() {
 
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    success: true,
    message: 'API route is working',
    data: []
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      message: 'Case created successfully',
      data: body
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error creating case',
      error: error.message
    }, { status: 500 });
  }
}