//Environment, ortam değişkenlerini tanımladığımız dosyadır.Bu dosya içerisindeki değişkenler, uygulamamızın farklı ortamlarda çalışmasını sağlar.Örneğin geliştirme ortamında farklı bir API adresi kullanabilirken, prodüksiyon ortamında farklı bir API adresi kullanabiliriz.Bu sayade, uygulamamızın farklı ortamlarda çalışmasını sağlayabiliriz.

//Gizli anahtarları da bu dosyada saklayabiliriz.Fakat bu gizli anahatarları commit'leyip uzak repoya(Github) göndermememiz gerekir.Bunun için gitignore dosyası içerisine environment.ts dosyasının adını eklememiz gerekir.
export const environment = {
    apiUrl: ''
};
