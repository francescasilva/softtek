// src/components/StepHeader.jsx


export default function StepHeader({ currentStep = 1 }) {
  return (
    <div className="w-full bg-[#f8faff] py-4  flex justify-center items-center">
      <div className="max-w-3xl mx-auto px-4 flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-bold ${currentStep === 1 ? 'bg-blue-600' : 'bg-gray-300'}`}>
            1
          </div>
          <span className={`text-sm font-medium ${currentStep === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            Planes y coberturas
          </span>
        </div>

        <div className="h-1 w-4 bg-gray-300 rounded-full"></div>

        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-bold ${currentStep === 2 ? 'bg-blue-600' : 'bg-gray-300'}`}>
            2
          </div>
          <span className={`text-sm font-medium ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            Resumen
          </span>
        </div>
      </div>
    </div>
  );
}
