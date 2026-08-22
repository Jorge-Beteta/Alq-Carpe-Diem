// ⚠️ CONFIGURACIÓN DE SUPABASE
// Reemplaza estos valores con los de TU proyecto de Supabase.
// Los obtienes en: Supabase Dashboard → Configuración del proyecto → API
// La "anon key" es segura para estar visible en el código del sitio — el acceso real
// se controla con las políticas de seguridad (RLS) que configuramos en la base de datos.

const SUPABASE_URL = "https://TU_PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_KEY_AQUI";

// Datos de contacto del negocio — edita esto con la info real
const CONTACTO = {
  whatsapp: "50212345678",       // número con código de país, sin +, sin espacios
  correo: "contacto@alquilerescarpediem.com",
  nombreNegocio: "Alquileres Carpe Diem"
};
